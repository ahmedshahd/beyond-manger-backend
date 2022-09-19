import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeyondManagerModule } from './beyond-manager/beyond-manager.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import * as moment from 'moment-timezone';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
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
import { MemberProfileModule } from './member-profile/member-profile.module';

const mocks = {
  Int: () => Math.floor(Math.random() * (100 - 1)) + 1,
  Float: () => (Math.random() * (100 - 1) + 1).toFixed(2),
  String: () => (Math.random() + 1).toString(36).substring(7),
  Void: () => null,
  DateTime: ()=> moment().tz("Africa/Cairo").format(),
};

@Module({
  imports: [    
    GraphQLModule.forRootAsync<ApolloDriverConfig>({     
      driver: ApolloDriver,
      useFactory: () => ({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      playground: (process.env.NODE_ENV === "production") ? true : false,
      introspection: true ,
      csrfPrevention: true,
      cache: "bounded",
      plugins: [
        (process.env.NODE_ENV !== "production") ? ApolloServerPluginLandingPageLocalDefault() : {},
      ],
      mocks,
    })}),
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
    MemberProfileModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
