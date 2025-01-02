import doctorModel from "../models/doctorModel.js"

const changeAvailablity = async (req,res) => {
    try {

        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({sucess:true, message: 'Availablity Changed'})
    } catch (error) {
         console.log(error)
        res.json({sucess:false,message:error.message})
    }
}

export {changeAvailablity}