import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module'; // Asegúrate de importar el módulo de Pokémon
import { Pokemon } from './pokemon/pokemon.entity'; // Importa la entidad Pokémon

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'pokemon_app',
      entities: [Pokemon],
      username: 'testuser',
      password: 'testuser123',
      synchronize: true,
    }),
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
