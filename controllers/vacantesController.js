exports.formularioNuevaVacante = (req,res) => {
    res.render('vacantes/nueva-vacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena el formulario y llena tu vacante'
    })
}