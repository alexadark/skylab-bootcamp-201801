const mongoose = require('mongoose')
const assert = require('assert')
const { Category, SubCategory, Product } = require('../models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/inforcosta-models-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    describe('create a product with category and subcategry', () => {
        let category, subcategory, product

        before(async () => {
            category = new Category({
                name: 'name-category'
            })

            subcategory = new SubCategory({
                name: 'name-subcategory'
            })

            product = new Product({
                article: 'article',
                category: category._id,
                subcategory: subcategory._id,
                brand: 'brand',
                description: 'description',
                weight: 1,
                stock: 1,
                price: 1,
                partNumber: 'partNumber',
                ean: 1
            })

            await Promise.all([
                category.save()
                    .then(_category => category = _category),
                subcategory.save()
                    .then(_subcategory => subcategory = _subcategory),
                product.save()
                    .then(_product => product = _product),
            ])
                .then(() => {
                    const id = product._id.toString()

                    return Product.findOne({ _id: id })
                })
                .then(_product => product = _product)
        })

        it('should create a product with category and subcategory', () => {
            assert(category, 'should category been saved')

            assert(subcategory, 'should subcategory been saved')

            assert(product, 'should product been saved')

            assert(product.category, 'should product have category')

            assert(product.category.toString(), category._id.toString(), 'should category match')

            assert(product.subcategory, 'should product have subcategory')

            assert(product.subcategory.toString(), subcategory._id.toString(), 'should subcategory match')
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})