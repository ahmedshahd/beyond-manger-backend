import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeyondManagerModule } from './beyond-manager/beyond-manager.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import * as moment from 'moment-timezone';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const mocks = {
  Int: () => Math.floor(Math.random() * (100 - 1)) + 1,
  Float: () => Math.random() * (100 - 1) + 1,
  String: () => (Math.random() + 1).toString(36).substring(7),
  Void: () => null,
  DateTime: ()=> moment(1448841600000).tz("Africa/Cairo").format(),
};

@Module({
  imports: [    
    GraphQLModule.forRoot<ApolloDriverConfig>({     
      driver: ApolloDriver,
      debug: true,
      playground: false,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      mocks,
    }),
    BeyondManagerModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
