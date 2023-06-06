import { getEstudaintes } from "./API.js"

addEventListener('DOMContentLoaded', cargarEstudiantes)

async function cargarEstudiantes(){
    const tablaEstudiantes = document.querySelector('#tabla')
    const estudiantes = await getEstudaintes();
    console.log(estudiantes);
    estudiantes.forEach(element => {
        tablaEstudiantes.innerHTML+= `
        
        <tr class="cards" 
        nombre=" ${element.nombre}"
        imagen="${element.imagen}
        edad=" ${element.edad}
        promedio=" ${element.promedio}
        nivelCAmpus=" ${element.nivelCAmpus}
        nivelIngles=" ${element.nivelIngles}
        especialidad=" ${element.especialidad}
        direccion=" ${element.direccion}
        celular=" ${element.celular}
        ingles=" ${element.ingles}
        Ser=" ${element.Ser}
        Review=" ${element.Review}
        Skills=" ${element.Skills}
        Asitencia=" ${element.Asitencia}
        
        >
        <th scope ="row" id="${element.id}">${element.id}</th>
        <td ${element.id}>${element.nombre}</td>
        <td ${element.id}>${element.especialidad}</td>
        <td ${element.id}><img src="images/${element.imagen}"></td>
        <td  ${element.id}><button type="button" class="btn btn-info">Notas</button></td>
        </tr>

        `
    })
}   

detalles()

    function detalles(){
        const tablaEstudiantes = document.querySelector('#tabla')
        tablaEstudiantes.addEventListener('click',(e)=>{

            console.log(e.target);
            if(e.target.getAttribute('id')){
                const atributos = e.target.getAttribute('id')
                const elemento = document.getElementById(atributos)
                const padre = elemento.parentNode
                console.log(padre);

                const imagen = padre.getAttribute('imagen')
                const edad = padre.getAttribute('edad')
                const nombre = padre.getAttribute('nombre')
                const promedio = padre.getAttribute('promedio')
                const nivelCAmpus = padre.getAttribute('nivelCAmpus')
                const nivelIngles = padre.getAttribute('nivelIngles')
                const especialidad = padre.getAttribute('especialidad')
                const celular = padre.getAttribute('celular')
                const direccion = padre.getAttribute('direccion')
                const ingles = padre.getAttribute('ingles')
                const Ser = padre.getAttribute('ser')
                const Review = padre.getAttribute('Review')
                const Skills = padre.getAttribute('Skills')
                const Asitencia = padre.getAttribute('Asitencia')

                const detalles = document.querySelector('#detalles')
                detalles.innerHTML=`
                <div class="containerDetalles">
                <div class="datos">
                    <div class="d-flex"><img src="images/${imagen}" alt="" class="m-2" ><button type="button" class="delete btn btn-danger" style="height: 40px;">Eliminar</button></div>
                    <h5>Nombre: ${nombre}</h5>
                    <h5>Edad: ${edad}</h5>
                    <h5>Promedio: ${promedio}</h5>
                    <h5>Nivel: ${nivelCAmpus}</h5>
                    <h5>Ingles: ${nivelIngles}</h5>
                    <h5>Especialidad: ${especialidad}</h5>
                    <h5>Direccion: ${direccion}</h5>
                    <h5 style="background-color: brown;"> Celular: ${celular}</h5>
                </div>
                </div>

                <div id="chats1" class="charts">
                
                
                </div>` 

                
            const getOpcionesCharts1 = ()=>{

                let value1 = (ingles*100)
                let value2 = (Ser*100)
                let value3 = (Review*100)
                let value4 = (Skills*100)
                let value5 = (Asitencia*100)


                return {
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      // doesn't perfectly work with our tricks, disable it
                      selectedMode: false
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                          show: true,
                          formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                          }
                        },
                        data: [
                          { value: value1, name: 'Ingles' },
                          { value: value2, name: 'Ser' },
                          { value: value3, name: 'Review' },
                          { value: value4, name: 'Skills' },
                          { value: value5, name: 'Asistencia' },
                          {
                            // make an record to fill the bottom 50%
                            value: value1 + value2 + value3 + value4 + value5,
                            itemStyle: {
                              // stop the chart from rendering this piece
                              color: 'none',
                              decal: {
                                symbol: 'none'
                              }
                            },
                            label: {
                              show: false
                            }
                          }
                        ]
                      }
                    ]
                  };

            }
            const charts1 = echarts. init(document.getElementById('chats1'));
            charts1.setOption(getOpcionesCharts1())



        }

    })
}


        
        
