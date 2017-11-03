/**
 * Created by michal on 8.3.2017.
 *
 * Put all validators at one place and do not write two validators on the same thing.
 * Keep the same regular expressions for frontend and backend.
 */
import {FormGroup} from "@angular/forms";


export function passwordMatchValidator(g: FormGroup) {
  return g.get('passwordField').value === g.get('passwordRepeatField').value ? null : {'mismatchedPasswords': true};
}
