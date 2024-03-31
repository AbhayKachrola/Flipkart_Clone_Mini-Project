import { useEffect } from 'react';
import { Box, Typography, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTowishlist, removeFromwishlist } from '../../redux/actions/wishlistAction';
import WishlistItem from './WishlistItem';

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const Wishlist = () => {
    const wishlistDetails = useSelector(state => state.wishlist);
    const { wishlistItems } = wishlistDetails;
    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(wishlistItems && id !== wishlistItems.id)   
            dispatch(addTowishlist(id));
    }, [dispatch, wishlistItems, id]);

    const removeItemFromWishlist = (id) => {
        dispatch(removeFromwishlist(id));
    }

    return (
        <>
        { wishlistItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Wishlist ({wishlistItems?.length})</Typography>
                    </Header>
                        {   wishlistItems.map(item => (
                                <WishlistItem item={item} removeItemFromWishlist={removeItemFromWishlist}/>
                            ))
                        }
                </LeftComponent>
            </Component> : <div>Your Wishlist is empty!</div>
        }
        </>
    )
}

export default Wishlist;


