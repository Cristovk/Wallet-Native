export function filtroSemana(today, mov){
    let objeto = {
        dia: today.getDate(),
        mes: today.getMonth() + 1,
        año: today.getFullYear(),
      };
      let ingreso = {1:0,
                    2:0,
                    3:0,
                    4:0,
                    5:0,
                    6:0,
                    7:0}
      let gasto= {1:0,
                2:0,
                3:0,
                4:0,
                5:0,
                6:0,
                7:0}
      let resp = {balance :[],
    gasto:[],
ingreso:[],
ingresosTot:0,
gastosTot:0}


      for(let i = 0; i < mov.length; i++){
          if(new Date(mov[i].fecha).getDate()===objeto.dia){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[1] = ingreso[1] + mov[i].monto
            } else {
                gasto[1] = gasto[1] + mov[i].monto
            }
          }


          if(new Date(mov[i].fecha).getDate()===objeto.dia-1){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[2] = ingreso[2] + mov[i].monto
            } else {
                gasto[2] = gasto[2] + mov[i].monto
            }
          }

          if(new Date(mov[i].fecha).getDate()===objeto.dia-2){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[3] = ingreso[3] + mov[i].monto
            } else {
                gasto[3] = gasto[3] + mov[i].monto
            }
          }

          if(new Date(mov[i].fecha).getDate()===objeto.dia-3){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[4] = ingreso[4] + mov[i].monto
            } else {
                gasto[4] = gasto[4] + mov[i].monto
            }
          }
          if(new Date(mov[i].fecha).getDate()===objeto.dia-4){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[5] = ingreso[5] + mov[i].monto
            } else {
                gasto[5] = gasto[5] + mov[i].monto
            }
          }
          if(new Date(mov[i].fecha).getDate()===objeto.dia-5){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[6] = ingreso[6] + mov[i].monto
            } else {
                gasto[6] = gasto[6] + mov[i].monto
            }
          }
          if(new Date(mov[i].fecha).getDate()===objeto.dia-6){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[7] = ingreso[7] + mov[i].monto
            } else {
                gasto[7] = gasto[7] + mov[i].monto
            }
          }

      }

      for(let i = 1; i < 8; i++){
          resp.balance.unshift(ingreso[i]-gasto[i]) 
          resp.ingreso.unshift(ingreso[i]) 
          resp.gasto.unshift(gasto[i]) 
      }
      

      for (const property in ingreso){
          resp.ingresosTot= ingreso[property] + resp.ingresosTot
      }

      for (const property in gasto){
        resp.gastosTot= gasto[property] + resp.gastosTot
    }
    
      return resp

}


export function filtroMes(today, mov){
    let objeto = {
        dia: today.getDate(),
        mes: today.getMonth() + 1,};
      let ingreso = {1:0,
                    2:0,
                    3:0,
                    4:0,
                    }
      let gasto= {1:0,
        2:0,
        3:0,
        4:0,
               }
               let resp = {balance :[],
                gasto:[],
            ingreso:[],
            ingresosTot:0,
            gastosTot:0}


      for(let i = 0; i < mov.length; i++){
          let fecha = new Date(mov[i].fecha).getDate()
          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes){

              if(fecha<8){
                  if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                      ingreso[1] = ingreso[1] + mov[i].monto
                    } else {
                gasto[1] = gasto[1] + mov[i].monto
            }
        }


          if(fecha >=8 && fecha<16){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[2] = ingreso[2] + mov[i].monto
            } else {
                gasto[2] = gasto[2] + mov[i].monto
            }
          }
          
          if(fecha >= 16 && fecha < 22){
              if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                  ingreso[3] = ingreso[3] + mov[i].monto
                } else {
                    gasto[3] = gasto[3] + mov[i].monto
                }
            }
            
            if(fecha >= 22 && fecha < 32){
                if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                    ingreso[4] = ingreso[4] + mov[i].monto
                } else {
                    gasto[4] = gasto[4] + mov[i].monto
                }
            }
            
        }
            
    }
    for(let i = 1; i < 5; i++){
        resp.balance.push(ingreso[i]-gasto[i]) 
        resp.ingreso.push(ingreso[i]) 
        resp.gasto.push(gasto[i]) 
    }
    for (const property in ingreso){
        resp.ingresosTot= ingreso[property] + resp.ingresosTot
    }

    for (const property in gasto){
      resp.gastosTot= gasto[property] + resp.gastosTot
  }

      return resp

}


export function filtroAño(today, mov){
    let objeto = {
        dia: today.getDate(),
        mes: today.getMonth() + 1,
        año: today.getFullYear(),
      };
      let ingreso = {1:0,
                    2:0,
                    3:0,
                    4:0,
                    5:0,
                    6:0,
                    }
      let gasto= {1:0,
                2:0,
                3:0,
                4:0,
                5:0,
                6:0,
                }
    let resp = {balance :[],
        gasto:[],
    ingreso:[],
    ingresosTot:0,
    gastosTot:0}


      for(let i = 0; i < mov.length; i++){
          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[1] = ingreso[1] + mov[i].monto
            } else {
                gasto[1] = gasto[1] + mov[i].monto
            }
          }


          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes-1){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[2] = ingreso[2] + mov[i].monto
            } else {
                gasto[2] = gasto[2] + mov[i].monto
            }
          }

          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes-2){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[3] = ingreso[3] + mov[i].monto
            } else {
                gasto[3] = gasto[3] + mov[i].monto
            }
          }

          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes-3){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[4] = ingreso[4] + mov[i].monto
            } else {
                gasto[4] = gasto[4] + mov[i].monto
            }
          }
          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes-4){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[5] = ingreso[5] + mov[i].monto
            } else {
                gasto[5] = gasto[5] + mov[i].monto
            }
          }
          if(new Date(mov[i].fecha).getMonth()+1===objeto.mes-5){
            if(mov[i].categoria === "Tentrante"|| mov[i].operacion === "recarga"){
                ingreso[6] = ingreso[6] + mov[i].monto
            } else {
                gasto[6] = gasto[6] + mov[i].monto
            }
          }

      }

      for(let i = 1; i < 7; i++){
        resp.balance.unshift(ingreso[i]-gasto[i]) 
        resp.ingreso.unshift(ingreso[i]) 
        resp.gasto.unshift(gasto[i]) 
    }
    

    for (const property in ingreso){
        resp.ingresosTot= ingreso[property] + resp.ingresosTot
    }

    for (const property in gasto){
      resp.gastosTot= gasto[property] + resp.gastosTot
  }

      return resp

}



export function last6Months(today){
    const mes= today.getMonth() + 1
    const objMeses = {
    1:"Ene",
    2:"Feb",
    3:"Mar",
    4:"Abr",
    5:"May",
    6:"Jun",
    7:"Jul",
    8:"Ago",
    9:"Sep",
    10:"Oct",
    11:"Nov",
    12:"Dic"}

const meses=[]

for(let i = 0; i < 6; i++){
    meses.unshift(objMeses[(mes - i)>0 ? mes-i : (mes - i) + 12 ]) //el ternario es por si estamos en u mes menor a 6
}
return meses

}

export function lastWeek(today){
  
    const aDay = 86400000
const dias=[]

for(let i = 0; i < 7; i++){
    dias.unshift(new Date(today-(aDay*i)).toLocaleDateString().slice(3,5))
}
return dias

}