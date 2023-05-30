var Planta = require('../models/planta')

module.exports.list = () => {
    return Planta
    .find()
    .sort({distância:1})
    .then(resposta => {
        return resposta
    })    
    .catch(erro => {
        return erro
    })    
}            


module.exports.listEspecie = especie => {
    return Planta.find({Espécie:especie})
    .then(resposta => {
        return resposta
    })    
    .catch(erro => {
        return erro
    })    
}            

module.exports.listImplant = implant => {
    return Planta.find({Implantação:implant})
    .then(resposta => {
        return resposta
    })    
    .catch(erro => {
        return erro
    })    
}            


module.exports.getFreguesias = () => {
    return Planta.distinct("Freguesia")
            .then(resposta => {
                return resposta.sort();
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getEspecies = () => {
    return Planta.distinct("Espécie")
            .then(resposta => {
                return resposta.sort();
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getPlanta = id => {
    return Planta.findOne({_id:id})
            .then(resposta => {
                return resposta
            })    
            .catch(erro => {
                return erro
            })    
}            

module.exports.insertPlanta = c => {
    return Planta.create(c)
            .then(resposta => {
                return resposta
            })    
            .catch(erro => {
                return erro
            })    
}            

/* 
module.exports.updatePlanta = c => {
    return Planta.updateOne({_id:c._id}, c)
            .then(resposta => {
                return resposta
            })    
            .catch(erro => {
                return erro
            })    
}            
 */

module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })    
            .catch(erro => {
                return erro
            })    
}            
