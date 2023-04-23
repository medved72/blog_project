import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from '../../lib/classNames'
import classes from './StarRating.module.scss'
import { Icon } from '../Icon'
import StarIcon from '../../assets/icons/star.svg'
interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props) => {
    const {
        className,
        size = 30,
        selectedStars: selectedStarsFromProps = 0,
        onSelect,
    } = props
    const [hoveredStars, setHoveredStars] = useState(0)

    const [selectedStars, setSelectedStars] = useState(selectedStarsFromProps)

    const handleMouseEnter = useCallback((count: number) => {
        return () => {
            setHoveredStars(count)
        }
    }, [])

    const handleMouseLeave = useCallback(() => {
        setHoveredStars(0)
    }, [])

    const handleSelect = useCallback(
        (count: number) => {
            return () => {
                if (selectedStars > 0) return
                setSelectedStars(count)
                onSelect?.(count)
            }
        },
        [onSelect, selectedStars]
    )

    return (
        <div
            className={classNames(
                classes.starRating,
                { [classes.selected]: selectedStars > 0 },
                [className]
            )}
        >
            {stars.map((starNumber) => {
                return (
                    <Icon
                        className={classNames(classes.starIcon, {
                            [classes.normal]: starNumber > selectedStars,
                            [classes.hovered]:
                                selectedStars === 0 &&
                                starNumber <= hoveredStars,
                        })}
                        key={starNumber}
                        Svg={StarIcon}
                        width={size}
                        height={size}
                        onMouseEnter={handleMouseEnter(starNumber)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleSelect(starNumber)}
                    />
                )
            })}
        </div>
    )
})
StarRating.displayName = 'StarRating'
