import * as moment from 'moment';

import { WORKLOG_DATE_STR_FORMAT } from '../../app.constants';

export const getWorklogStr = (date: Date = new Date()): string => {
  return moment(date).format(WORKLOG_DATE_STR_FORMAT);
};
