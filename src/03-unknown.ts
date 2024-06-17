//************* ANY EXAMPLES *************//
let anyVar: any; //Desactiva todo el analisis de código estatico de ts.
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar; //No muestra error ya que anyVar puede ser cualquier cosa incluido un boolean. Y se desactiva el analisis de código.
anyVar.doSomething();
anyVar.toUpperCase();

// ************* UNKNOWN EXAMPLES *************//
let unknownVar: unknown; //Permite asignar a una misma variable diferentes tipos
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

////No me deja hacer ejecucuón sin verificar antes el tipo Ej.
unknownVar.doSomething();
unknownVar.toUpperCase();

//se hace verificación de tipo para prevenir errores.
if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}

//Puede retornarse en funciones.
const parse = (str: string): unknown =>{
    return JSON.parse(str);
}

//Asignar a otras variables tipadas (pide verificación de tipo)
// let isNewV2: boolean = unknownVar; //Saca error
//Froma correcta...
if (typeof unknownVar === 'boolean') {
    let isNewV2: boolean = unknownVar;
}