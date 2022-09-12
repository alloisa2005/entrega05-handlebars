
// Middleware para validar lo que viene en el body como dato de entrada
const validarInputsProduct = (req,res,next) => {
  let producto = req.body;

  if(producto.title === '' || producto.price <= 0 || producto.price === '') return res.status(404).send({
    status: 'ERROR',
    result: 'Ingrese los datos del producto correctamente'
  });

  next();
}

// Middleware para validar si existe el ID del producto
const validarProductId = (req,res,next) => {
  let { id } = req.params;  

  let existe = products.some(p => p.id === id);

  existe ? next() : res.status(200).send({ status:'ERROR', result: `No existe producto con ID ${id}`});
}

module.exports = {validarProductId, validarInputsProduct}