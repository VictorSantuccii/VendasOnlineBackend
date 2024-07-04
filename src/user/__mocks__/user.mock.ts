import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: 'oi',
  createdAt: new Date(),
  email: 'oi3',
  id: 43242,
  name: 'oi2',
  password: '$2b$10$7jw6ATC0yRhX6nf44MODROylsCA2BHuZTdn2Ye8cGQYoUUBXgLQBG',
  phone: 'oi',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
