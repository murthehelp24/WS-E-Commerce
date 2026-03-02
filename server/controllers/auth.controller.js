

export async function register(req, res) {
  try {
    const {email, password} = req.body 

    //Step 1 Validate body
    if(!email){
      return res.status(400).json({ message: 'Email is required'})
    }
    if(!password){
      return res.status(400).json({ message: 'password is required'})
    }

    //Step 2 check email in db already  ?



    console.log(email, password)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function login(req, res) {
  try {
    res.send('Hello Login')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export async function currentUser(req, res) {
  try {
    res.send('Hello currentUser')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}


