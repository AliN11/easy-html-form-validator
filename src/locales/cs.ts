import * as rules from '@/types/rules';
import { LangKeys } from '@/types';

const csLang: Record<LangKeys, string> = {
  [rules.ACCEPTED]: 'P�ijm�te toto pole',
  [rules.ALPHA]: 'Zadejte pouze abecedn� znaky',
  [rules.ALPHA_NUM]: 'Zadejte pouze alfanumerick� znaky',
  [rules.ALPHA_NUM_DASH]: 'Zadejte pouze alfanumerick� znaky, poml�ky a podtr��tka',
  [rules.BETWEEN_LENGTH]: 'Hodnota mus� m�t $1 a� $2 znak�',
  [rules.BETWEEN_NUMBER]: 'Zadejte ��slo od $1 do $2',
  [rules.DIGITS]: 'Hodnota mus� b�t ��slo s $1 ��slicemi',
  [rules.EMAIL]: 'Zadejte platnou emailovou adresu',
  [rules.ENDS_WITH]: 'Hodnota mus� kon�it znaky �$1�',
  [rules.EQUAL_LENGTH]: 'Hodnota mus� m�t $1 znak�',
  [rules.EQUAL_NUMBER]: 'Hodnota mus� b�t rovna $1',
  [rules.GREATER_EQUAL]: 'Zadejte ��slo v�t�� nebo rovn� $1',
  [rules.INTEGER]: 'Hodnota mus� b�t platn� cel� ��slo',
  [rules.LESS_EQUAL]: 'Zadejte ��slo men�� nebo rovn� $1',
  [rules.MAX_LENGTH]: 'Maxim�ln� d�lka je $1',
  [rules.MIN_LENGTH]: 'Minim�ln� d�lka je $1',
  [rules.NUM_DASH]: 'Zadejte ��sla s poml�kami a podtr��tky',
  [rules.NUMBER]: 'Zadejte platn� ��slo',
  [rules.REGEX]: "Hodnota neodpov�d� vzoru",
  [rules.REQUIRED]: 'Toto pole je povinn�',
  [rules.STARTS_WITH]: 'Hodnota mus� za��nat znaky �$1�',
  [rules.WITHIN]: 'Hodnota je nespr�vn�',
};

export default csLang;