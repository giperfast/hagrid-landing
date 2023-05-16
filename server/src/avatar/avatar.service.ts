import { Injectable, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { readdirSync } from 'fs';
import { parse } from 'path';

@Injectable()
export class AvatarService {
  constructor(private readonly databaseService: DatabaseService) {}

  get(userId:number, avatarUnix:number):string {
    if (avatarUnix === null) {
      return this.getDefaultUrl(userId);
    }
    return this.getUrl(userId, avatarUnix);
  }

  getUrl(userId:number, avatarUnix?:number):string {
    const index:number = Math.floor(userId/100);
    const path:string = `/public/avatars/${index}`;
    const file:string = this.findByName('.' + path, String(userId));
    const folder:string = `${path}/${file}?${avatarUnix}`;
    return folder;
  }

  getDefaultUrl(userId:number):string {
    const path:string = '/public/avatars/default';
    const files:Array<string> = readdirSync('.' + path);
    const index:number = userId % files.length;
    const folder:string = `${path}/${files[index]}`;
    return folder;
  }

  findByName(dir:string, name:string):string {
    const files = readdirSync(dir);
    for (const file of files) {
        const file_data = parse(file);
        if (file_data.name === name) {
          return name + file_data.ext;
        }
    }
    return null;
  }
}

