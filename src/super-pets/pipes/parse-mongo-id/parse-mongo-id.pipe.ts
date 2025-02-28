import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('id: ', value);
    if(!isValidObjectId(value)){
      throw new BadRequestException(`El valor '${value}' no es un Mongo-Id válido`);
    }
    return value;
  }
}
