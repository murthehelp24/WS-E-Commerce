

export async function create(req, res) {
  try {
    res.send('Hello Category')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function list(req, res) {
  try {
    res.send('Hello Category List')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function remove(req, res) {
  try {
    console.log(req.params.id)
    res.send('Hello Category Delete')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
