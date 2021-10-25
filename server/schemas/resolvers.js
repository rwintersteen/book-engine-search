
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {},

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);

            return { token, user };
        }
    },
};

module.exports = resolvers;