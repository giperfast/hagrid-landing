import { Prisma } from '@prisma/client'
import { DatabaseService } from './database.service';
import { AvatarService } from '../avatar/avatar.service';

const avatarService = new AvatarService(new DatabaseService());

export const DatabaseExtended = Prisma.defineExtension((client) => {

  const test = (async (userId) => {
    return userId;
  })

  return client.$extends({
    result: {
      profile: {
        avatar: {
          needs: {},
          compute(profile) {
            return avatarService.get(profile['userId'], profile['avatar'])
          },
        },
      },
    },
  })
})

