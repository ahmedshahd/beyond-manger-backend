import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeyondManagerModule } from './beyond-manager/beyond-manager.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import * as moment from 'moment-timezone';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MemberModule } from './member/member.module';
import { CompanyModule } from './company/company.module';
import { PolicyModule } from './policy/policy.module';
import { PaymentModule } from './payment/payment.module';
import { TpaModule } from './tpa/tpa.module';
import { PolicyUtilizationModule } from './policy-utilization/policy-utilization.module';
import { IssuedPlanModule } from './issued-plan/issued-plan.module';
import { PolicyPlanModule } from './policy-plan/policy-plan.module';
import { LineOfBusinessModule } from './line-of-business/line-of-business.module';
import { IndustryModule } from './industry/industry.module';
import { InsuranceCompanyModule } from './insurance-company/insurance-company.module';

const mocks = {
  Int: () => Math.floor(Math.random() * (100 - 1)) + 1,
  Float: () => Math.random() * (100 - 1) + 1,
  String: () => (Math.random() + 1).toString(36).substring(7),
  Void: () => null,
  DateTime: ()=> moment().tz("Africa/Cairo").format(),
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
    MemberModule,
    CompanyModule,
    PolicyModule,
    PaymentModule,
    TpaModule,
    PolicyUtilizationModule,
    IssuedPlanModule,
    PolicyPlanModule,
    LineOfBusinessModule,
    IndustryModule,
    InsuranceCompanyModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
