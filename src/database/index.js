import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import Product from '../app/models/Product'
import User from '../app/models/User'
import Category from '../app/models/Category'

import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize('postgresql://postgres:*4a-5eFb15fCEDCf1635Fd6e4fD*1BFa@viaduct.proxy.rlwy.net:43241/railway')
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect('mongodb://mongo:Cfgg3da1g2cFBef2BA-ehFcE3DD64EH3@roundhouse.proxy.rlwy.net:42209')
  }
}

export default new Database()