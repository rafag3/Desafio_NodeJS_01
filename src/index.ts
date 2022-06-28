/**
 * Required External Modules
 */

 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 
 dotenv.config();
 
 /**
  * App Variables
  */
 
 if (!process.env.PORT) {
	 process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();
 
 /**
  *  App Configuration
  */
 
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 
 /**
  * Server Activation
  */
 
 app.listen(PORT, () => {
	 console.log(`Listening on port ${PORT}`);
 
   // Escreva aqui a sua msg para o mundo
   console.log('Desafio 02 - Starts');
 
	 const nome1:string = 'Rafael Silva';
	 const idade1:number = 32;
	 const peso1:number = 95;
	 const altura1:number = 1.75;
	 const ehDev1:boolean = true;
	 
	 const nome2:string = 'João Silva';
	 const idade2:number = 29;
	 const peso2:number = 89;
	 const altura2:number = 1.65;
	 const ehDev2:boolean = true;
	 
	 const nome3:string = 'Pedro Silva';
	 const idade3:number = 25;
	 const peso3:number = 79;
	 const altura3:number = 1.70;
	 const ehDev3:boolean = true;
	 
	 const nome4:string = 'Alfredo Silva';
	 const idade4:number = 36;
	 const peso4:number = 96;
	 const altura4:number = 1.80;
	 const ehDev4:boolean = true;
	 
	 console.log(nome1,nome2,nome3,nome4);
   console.log(('Total de anos:'),idade1+idade2+idade3+idade4);
   console.log(nome1,peso1/(altura1*altura1));
   console.log(nome2,peso2/(altura2*altura2));
   console.log(nome3,peso3/(altura3*altura3));
   console.log(nome4,peso4/(altura4*altura4));
  
 });
 