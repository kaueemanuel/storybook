import {
  format,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns"
import { t } from "i18next"

export function toElapsedTimeFriendly(from: Date, to: Date): string {
  const minutesDifference = differenceInMinutes(from, to)

  if (minutesDifference < 1) {
    return t("extension_date_toElapsedTimeFriendly_now")
  }

  if (minutesDifference < 60) {
    return t("extension_date_toElapsedTimeFriendly_x_min_ago", {
      min: minutesDifference,
      plural: minutesDifference > 1 ? t("text_s_plural") : "",
    })
  }

  const hoursDifference = differenceInHours(from, to)
  if (hoursDifference < 24) {
    return t("extension_date_toElapsedTimeFriendly_x_hour_ago", {
      hour: hoursDifference,
      plural: hoursDifference > 1 ? t("text_s_plural") : "",
    })
  }

  const daysDifference = differenceInDays(from, to)
  if (daysDifference < 31) {
    return t("extension_date_toElapsedTimeFriendly_x_day_ago", {
      day: daysDifference,
      plural: daysDifference > 1 ? t("text_s_plural") : "",
    })
  }

  return format(to, "dd/MM/yyyy")
}
