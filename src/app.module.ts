import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeyondManagerModule } from './beyond-manager/beyond-manager.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// const mocks = {
//   Int: () => 6,
//   Float: () => 22.1,
//   String: () => 'Hello',
// };

@Module({
  imports: [    
    GraphQLModule.forRoot<ApolloDriverConfig>({     
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    
      mocks:true,
    }),
    BeyondManagerModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
