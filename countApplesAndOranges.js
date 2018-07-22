function countApplesAndOranges( s, t, a, b, fallenApples, fallenOranges ) {
    let appleTree = a,
         orangeTree = b,
         houseLeft = s,
         houseRight = t,
         houseWidth = Math.abs( houseRight - houseLeft ),
         appleHouseLeftDist = Math.abs( houseLeft - appleTree ),
         appleHouseRightDist = Math.abs( houseRight - appleTree ),
         orangeHouseLeftDist = Math.abs( orangeTree - houseLeft ),
         orangeHouseRightDist = Math.abs( orangeTree - houseRight );

    let appleHits = 0, orangeHits = 0;

    for ( let i = 0; i < fallenApples.length; i++ ) {
        if( fallenApples[ i ] <= 0 ) continue;

        if( fallenApples[ i ] >= appleHouseLeftDist && fallenApples[ i ] <= appleHouseRightDist ) {
            appleHits++;
        }
    }

    for ( let i = 0; i < fallenOranges.length; i++ ) {
        if( fallenOranges[ i ] >= 0 ) continue;

        if( -fallenOranges[ i ] <= orangeHouseLeftDist && -fallenOranges[ i ] >= orangeHouseRightDist ) {
            orangeHits++;
        }
    }

    console.log(appleHits);
    console.log(orangeHits);
}

countApplesAndOranges(7, 11, 5, 15, 3, 2)