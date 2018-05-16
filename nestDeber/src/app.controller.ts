import {Get, Controller, Req, Res} from '@nestjs/common';

const fs = require("fs");

@Controller()
export class AppController {
    @Get()
    root(@Req() request, @Res() response) {
        console.log('1 Inicio');
        let contenHtml = '';
        console.log('2 contenidoHtml', contenHtml);

        fs.readFile(
            __dirname + '/html/Index.html',
            'utf8',
            (error, contenidoDelArchivo) => {
                console.log('3 Respondio');
                const name = 'Danny';
                if (error) {
                    console.log('4 Error', error);
                    console.log('5 contenidoHtml', contenHtml);
                    console.log('6 Termino');
                    return response.send('Error');
                } else {
                    contenHtml = contenidoDelArchivo;

                    contenHtml = contenHtml.replace('{{nombre}}', name);


                    console.log('4 contenidoHtml', contenHtml);
                    console.log('5 contenidoHtml', contenHtml);
                    console.log('6 Termino');
                    return response.send(contenHtml);

                }

            }
        );


    }
}