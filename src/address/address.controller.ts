import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from '../user/enum/user-type.enum';

@Roles(UserType.User)
@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService: AddressService
    ){}

   
    @Post()
    @UsePipes(ValidationPipe)
    async createAddress( @Body() createAddressDto: createAddressDto, @UserId('userId') userId: number): Promise<AddressEntity>
    {
        return this.addressService.createAddress(createAddressDto, userId)
    }
}
