import { fakeDb } from '@/shared/lib/faker'
import { type RatingDto } from '@/shared/api/types'

export const articleRatingsMock: RatingDto[] = fakeDb['article-ratings']
