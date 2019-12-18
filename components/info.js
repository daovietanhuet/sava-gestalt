import React from 'react';
import {Box, Avatar, Text, Divider, Column, Heading, Image, Mask} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Info extends React.Component {
  render() {
    return(
      <Box>
          <Box height="40vh" paddingY={2}>
              <Mask shape="rounded" height="100%">
                <Image 
                    alt="sava"
                    src={this.props.allPackages[this.props.choosePackage].packageImage}
                    naturalHeight={1}
                    naturalWidth={1}
                />
              </Mask>
          </Box>
          <Box paddingX={2}>
              <Text inline>Gói dữ liệu từ</Text>
              <Text weight="bold" inline> app.sava.google.drive</Text>
          </Box>
          <Box paddingX={2}>
              <Heading size="xs">{this.props.allPackages[this.props.choosePackage].packageTitle}</Heading>
          </Box>
          <Box paddingX={2} marginTop={2}>
              <Text weight="bold"> {this.props.allPackages[this.props.choosePackage].packageDescription} </Text>
          </Box>
          <Box paddingX={2} marginTop={2}>
              <Text> {this.props.allPackages[this.props.choosePackage].packageLongDescription}</Text>
          </Box>
      </Box>
    )
  }
}

export default Info;