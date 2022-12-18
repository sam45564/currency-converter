const { UserInputError } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const models = require('../models');
const countryService = require('../services/countries');
const currConverterService = require('../services/currencyConverter');
require('dotenv').config();

const resolvers = {
    Query: {
        async me(_, args, { user }) {
            if (!user) throw new Error('Not authenticated');

            return await models.User.findByPk(user.id);
        },
        async getCountryDetails(_, { name }, { user }) {
            if (!user) throw new Error('Not authenticated');

            const data = await countryService.fetchCountryDetails(name);
            if (!data) throw new UserInputError(`Invalid country name: ${name}`);

            return data;
        },
        async convertCurrency(_, { amount, targetCurrency }, { user }) {
            if (!user) throw new Error('Not authenticated');

            const data = await currConverterService.convert(amount, targetCurrency);
            if (!data) throw new UserInputError(`Invalid inputs`);

            return data;
        }
    },
    Mutation: {
        async registerUser(root, { username, email, password }) {
            try {
                const user = await models.User.create({
                    username,
                    email,
                    password: await bcrypt.hash(password, 10)
                })
                const token = jsonwebtoken.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: 1800 }
                )
                return {
                    token, id: user.id, username: user.username, email: user.email, message: "Authenticated successfully."
                }
            } catch (error) {
                throw new Error(error.message)
            }
        },
        async login(_, { email, password }) {
            try {
                const user = await models.User.findOne({ where: { email } })
                if (!user) {
                    throw new Error('No user with that email')
                }
                const isValid = await bcrypt.compare(password, user.password)
                if (!isValid) {
                    throw new Error('Incorrect password')
                }

                const token = jsonwebtoken.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: 1800 }
                )
                return {
                    token, user
                }
            } catch (error) {
                throw new Error(error.message)
            }
        }
    },

}

module.exports = resolvers