const uuid = require('uuid')
const path = require('path')
const {Device} = require('../modules/modules')
const ApiError = require('../error/ApiError')

class DeviceController {
  async create (req, res, next) {
    try {
      const {name, price, brandId, typeId, img, info} = req.body

      const device = await Device.create({name, price, brandId, typeId, img})
      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll (req, res) {
    
  }

  async getOne (req, res) {
    
  }
}

module.exports = new DeviceController()
