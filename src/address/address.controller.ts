import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Param } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';


@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService: AddressService
    ){}

    @Roles(UserType.User)
    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddress( @Body() createAddressDto: createAddressDto, @Param('userId') userId: number): Promise<AddressEntity>
    {
        return this.addressService.createAddress(createAddressDto, userId)
    }
}
