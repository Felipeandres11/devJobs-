exports.mostrarTrabajos = (req,res) => {
    
    res.render('home/home',{
        nombrePagina: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores web',
        barra: true,
        boton: true
    })
}