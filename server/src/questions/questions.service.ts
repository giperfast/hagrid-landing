import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class QuestionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  getAll() {
    return this.databaseService.user.findMany({
      include: {
        questions: {
          include: {
            answer: true,
          },
        },
        profile: true,
        
      },
    });
  }

  get(page: number, limit: number) {
    return this.databaseService.user.findMany({
      skip: page,
      take: limit,

      include: {
        questions: {
          include: {
            answer: true,
          },
        },
        profile: true,
      },
    });
  }

  create() {
  }

  /*delete() {
    return this.databaseService.user.delete({
      where: { id: 2 }
    });
  }*/

  /*create() {
    return this.databaseService.user.create({
      data: {
        questions: {
          create: [
            {
              text: "Does Google index this content?",
              answer: {
                create: {
                    text: "Absolutely! And more than just index.We actually feed your questions and answers to the Google FAQ schema, so that this is now structured information that can feed snippets in Google Search results. This should boost your SEO chops, all without any effort from you.",
                },
              }
            },
          ],
        },
        profile: {
          create: {
              name: "Anonymous",
              avatar: 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-15.svg'
          },
        },
      },
    })
  }*/
}

