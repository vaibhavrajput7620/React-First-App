const mongooose = require('mongoose');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

const userSchema = new mongooose.Schema({
    firstname:{
        type : String,
        required:true
        
      },
      lastname:{
        type : String,
        required:true
        
      },
      address:{
        type:String,
        required:true
        
      },
      pincode:{
        type:Number,
        required:true
      },
      // gender: {
      //   type: String,
      //   required:true
      // },
      email:{
        type:String,
        required:true
      },
      phonenumber: {
        type: Number,
        required:true
        
      },
      country:{
        type:String,
        required:true
      },
      bio:{
        type:String,
        required:true
      },
      dob:{
        type:Date,
        required:true
      },
      username:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      cpassword:{
        type:String,
        required:true
      },
      tokens:[{
          token:{
            type:String,
            required:true
          }
      }]
    })

    userSchema.pre('save', async function (next) {
      
      if (this.isModified('password')) {
        this.password =  await bcrypt.hash(this.password , 12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
      }
      next();
    });

    userSchema.methods.generateAuthToken = async function(){
        try {
          const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({token:token})
          await this.save();
          return token;
        } catch (error) {
          res.send("the error part" + error);
          
        }
      
      }


const User = mongooose.model('USER', userSchema);

module.exports = User;