import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forgotpassword'
})
export class ForgotpasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
