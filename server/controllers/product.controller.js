
import prisma from "../config/prisma.js"


export async function create(req, res) {
  try {
    const { title, description, price, quantity, categoryId, images } = req.body
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        // images: images
      }
    })
    res.send('Create Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function list(req, res) {
  try {
    res.send('list Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function update(req, res) {
  try {
    res.send('update Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function remove(req, res) {
  try {
    res.send('Delete Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}


export async function listBy(req, res) {
  try {
    res.send('listBy Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function searchFilter(req, res) {
  try {
    res.send('searchFilter Product')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}


