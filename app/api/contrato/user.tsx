const userSchema = new Schema({
  nome: String,
  email: String,
  password: String,
  permissionLevel: Number,
});

export default function User(req, res) {
  if (req.method == "POST") {
  }
}

function validaUsuario(user) {}
