import {Controller, Get, Post, Req, Res} from "@nestjs/common";

const fs =require('fs');
let preguntaHtml=fs.readFileSync(__dirname+'/html/preguntasFrecuentes.html', 'utf8');
@Controller()
export class PreguntasFrecuentesController {

    preguntasFrecuentes=[];
    @Post('preguntasFreq')
    anadirPreguntas(@Req() request, @Res() response){
        const parametroConsulta=request.query;
        this.preguntasFrecuentes.push(new preguntasFrecParam(parametroConsulta.pregunta, parametroConsulta.respuesta));
        console.log(request.pregunta);
        preguntaHtml=preguntaHtml.concat('<h1> Pregunta </h1> ',request.pregunta);
        preguntaHtml=preguntaHtml.concat('<p> Respuesta</p>', request.respuesta);

        return response.send(this.preguntasFrecuentes);
    }

    @Get('pregunta')
    mostrarPreguntas(@Res () response){
        return response.status(200).send(this.preguntasFrecuentes);
    }


}

class preguntasFrecParam{
    constructor(public pregunta: string,
                public respuesta: string){
    }

}