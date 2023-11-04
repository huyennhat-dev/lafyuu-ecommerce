import React, { useState, useEffect } from 'react'
import { StyleSheet, View, } from 'react-native'
import ReviewComponent from '../../../views/components/reviewComponent'
import HeadingComponent from '../../../views/home_screen/components/headingComponent'
import { ReviewModel, reviewData } from '../../../models/review.model'
type Props = {
    productId: string
}

const ReviewProduct = ({ productId }: Props) => {

    const [reviews, setReviews] = useState<ReviewModel[]>([])

    useEffect(() => {
        const data = reviewData
        setReviews(data)

    }, [])


    return (
        <View style={styles.reviewProduct}>
            <HeadingComponent data={{
                onPress: () => { },
                title: "Review Product",
                text: "See More"
            }} />
            {reviews.map((item, index) => (
                <ReviewComponent key={index} props={{ data: item }} />
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    reviewProduct: {
        flex: 1,
        marginTop: 16
    }
})
export default ReviewProduct