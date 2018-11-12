import { User, UserStatus, UserRole } from '../models/user.model';
export default [{
       id: 1,
       name: 'Name',
       status: UserStatus.OFFLINE,
       role: UserRole.ADMIN,
       birthdate : new Date()
     },
     {
       id: 2,
       name: 'Nane2',
       status: UserStatus.ONLINE,
       role: UserRole.USER,
       birthdate : new Date()

     },
     {
       id: 3,
       name: 'Nane3',
       status: UserStatus.ONLINE,
       role: UserRole.MODER,
       birthdate : new Date()
     }, 
     {
      id: 4,
      name: 'Nane3',
      status: UserStatus.ONLINE,
      role: UserRole.USER,
      birthdate : new Date()
    },           
  ];

