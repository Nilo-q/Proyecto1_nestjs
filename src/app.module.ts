import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { InventoryModule } from './inventory/inventory.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, CustomersModule, InventoryModule, OrdersModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
