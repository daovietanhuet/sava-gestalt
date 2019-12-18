import React from 'react';
import {Box, Avatar, Text, Divider, Column, Mask, Image, Heading, Touchable, Icon, IconButton} from "gestalt";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Box>
                <Box>
                    <Box padding={3}>
                        <Text weight="bold" size="sm">Hãy khám phá các gói bạn đã mua. Các gói được phân loại theo từng chủ đề, hãy chọn một chủ đề và bắt đầu khám phá!</Text>
                    </Box>
                    <Box color="darkGray" shape="pill" marginTop={5} marginBottom={3} display="flex">
                        <Column span={10}>
                            <Box padding={2} paddingX={5}>
                                <Text color="white" weight="bold">
                                    Gói luyện tập
                                </Text>
                            </Box>
                        </Column>
                        <Column span={2}>
                            <Box>
                                <IconButton icon="arrow-circle-forward" iconColor="white" accessibilityLabel="shop" onClick={e => this.props.onGoShopping()}/>
                            </Box>
                        </Column>
                    </Box>
                    <Box>
                        <Text size="lg" weight="bold">
                            Gói trò chơi chủ đề gia đình
                        </Text>
                    </Box>
                    <Box width="100%" overflow='scrollX'>
                        <Box display="flex" direction="row" height="50vh" width="max-content">
                            { 
                                this.props.familyPackages.map((value) => {
                                    if(this.props.buy["" + value + ""])
                                    return (
                                        <Box padding={3} display="inlineBlock" width="60vw" key={value}>
                                            <Touchable
                                                mouseCursor="zoomIn"
                                                shape="rounded"
                                                onTouch={e => this.props.onGoInfo(value)}
                                            >
                                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="60%">
                                                <Image
                                                    alt="sava"
                                                    src={this.props.allPackages[value].packageImage}
                                                    naturalHeight={1}
                                                    naturalWidth={1}
                                                />
                                            </Mask>
                                            <Box paddingY={1}>
                                                <Text size="xl" weight="bold" truncate> {this.props.allPackages[value].packageTitle} </Text>
                                            </Box>
                                            <Box>
                                                <Text truncate>{this.props.allPackages[value].packageDescription}</Text>
                                            </Box>
                                            </Touchable>
                                        </Box>
                                    )
                                })
                            }
                            <Box padding={3} display="inlineBlock" width="60vw">
                                <Touchable
                                    mouseCursor="zoomIn"
                                    shape="rounded"
                                    onTouch={e => this.props.onGoShopping()}
                                >
                                <Mask shape="rounded" willChangeTransform={false} width="100%" height="40vh">
                                    <Box display="flex" alignItems="center" justifyContent="center" color="lightGray" height="100%">
                                        <Icon icon="add" size={40} accessibilityLabel="add"/>
                                    </Box>
                                </Mask>
                                </Touchable>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Text size="lg" weight="bold">
                            Gói trò chơi chủ đề trẻ em
                        </Text>
                    </Box>
                    <Box width="100%" overflow='scrollX'>
                        <Box display="flex" direction="row" height="50vh" width="max-content">
                            { 
                                this.props.childrenPackages.map((value) => {
                                    if(this.props.buy["" + value + ""])
                                    return (
                                        <Box padding={3} display="inlineBlock" width="60vw" key={value}>
                                            <Touchable
                                                mouseCursor="zoomIn"
                                                shape="rounded"
                                                onTouch={e => this.props.onGoInfo(value)}
                                            >
                                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="60%">
                                                <Image
                                                    alt="sava"
                                                    src={this.props.allPackages[value].packageImage}
                                                    naturalHeight={1}
                                                    naturalWidth={1}
                                                />
                                            </Mask>
                                            <Box paddingY={1}>
                                                <Text size="xl" weight="bold" truncate> {this.props.allPackages[value].packageTitle} </Text>
                                            </Box>
                                            <Box>
                                                <Text truncate>{this.props.allPackages[value].packageDescription}</Text>
                                            </Box>
                                            </Touchable>
                                        </Box>
                                    )
                                })
                            }
                            <Box padding={3} display="inlineBlock" width="60vw">
                                <Touchable
                                    mouseCursor="zoomIn"
                                    shape="rounded"
                                    onTouch={e => this.props.onGoShopping()}
                                >
                                <Mask shape="rounded" willChangeTransform={false} width="100%" height="40vh">
                                    <Box display="flex" alignItems="center" justifyContent="center" color="lightGray" height="100%">
                                        <Icon icon="add" size={40} accessibilityLabel="add"/>
                                    </Box>
                                </Mask>
                                </Touchable>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box color="darkGray" shape="pill" marginTop={5} marginBottom={3} display="flex">
                        <Column span={10}>
                            <Box padding={2} paddingX={5}>
                                <Text color="white" weight="bold">
                                    Gói thi đấu
                                </Text>
                            </Box>
                        </Column>
                        <Column span={2}>
                            <Box>
                                <IconButton icon="arrow-circle-forward" accessibilityLabel="shop" iconColor="white" onClick={e => this.props.onGoShopping()}/>
                            </Box>
                        </Column>
                </Box>
                <Box>
                    <Box>
                        <Text size="lg" weight="bold">
                            Gói giải trí
                        </Text>
                    </Box>
                    <Box width="100%" overflow='scrollX'>
                        <Box display="flex" direction="row" height="50vh" width="max-content">
                            { 
                                this.props.entertainmentPackages.map((value) => {
                                    if(this.props.buy["" + value + ""])
                                    return (
                                        <Box padding={3} display="inlineBlock" width="60vw" key={value}>
                                            <Touchable
                                                mouseCursor="zoomIn"
                                                shape="rounded"
                                                onTouch={e => this.props.onGoInfo(value)}
                                            >
                                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="60%">
                                                <Image
                                                    alt="sava"
                                                    src={this.props.allPackages[value].packageImage}
                                                    naturalHeight={1}
                                                    naturalWidth={1}
                                                />
                                            </Mask>
                                            <Box paddingY={1}>
                                                <Text size="xl" weight="bold" truncate> {this.props.allPackages[value].packageTitle} </Text>
                                            </Box>
                                            <Box>
                                                <Text truncate>{this.props.allPackages[value].packageDescription}</Text>
                                            </Box>
                                            </Touchable>
                                        </Box>
                                    )
                                })
                            }
                            <Box padding={3} display="inlineBlock" width="60vw">
                                <Touchable
                                    mouseCursor="zoomIn"
                                    shape="rounded"
                                    onTouch={e => this.props.onGoShopping()}
                                >
                                <Mask shape="rounded" willChangeTransform={false} width="100%" height="40vh">
                                    <Box display="flex" alignItems="center" justifyContent="center" color="lightGray" height="100%">
                                        <Icon icon="add" size={40} accessibilityLabel="add"/>
                                    </Box>
                                </Mask>
                                </Touchable>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box padding={3}>
                        <Text weight="bold">Hãy thử sức thi đấu chứng tỏ khả năng bản thân đi nào !!!</Text>
                    </Box>
                    <Box>
                        <Text size="lg" weight="bold">
                            Gói solo
                        </Text>
                    </Box>
                    <Box width="100%" overflow='scrollX'>
                        <Box display="flex" direction="row" height="50vh" width="max-content">
                            { 
                                this.props.competitionPackages.map((value) => {
                                    if(this.props.buy["" + value + ""])
                                    return (
                                        <Box padding={3} display="inlineBlock" width="60vw" key={value}>
                                            <Touchable
                                                mouseCursor="zoomIn"
                                                shape="rounded"
                                                onTouch={e => this.props.onGoInfo(value)}
                                            >
                                            <Mask shape="rounded" willChangeTransform={false} width="100%" height="60%">
                                                <Image
                                                    alt="sava"
                                                    src={this.props.allPackages[value].packageImage}
                                                    naturalHeight={1}
                                                    naturalWidth={1}
                                                />
                                            </Mask>
                                            <Box paddingY={1}>
                                                <Text size="xl" weight="bold" truncate> {this.props.allPackages[value].packageTitle} </Text>
                                            </Box>
                                            <Box>
                                                <Text truncate>{this.props.allPackages[value].packageDescription}</Text>
                                            </Box>
                                            </Touchable>
                                        </Box>
                                    )
                                })
                            }
                            <Box padding={3} display="inlineBlock" width="60vw">
                                <Touchable
                                    mouseCursor="zoomIn"
                                    shape="rounded"
                                    onTouch={e => this.props.onGoShopping()}
                                >
                                <Mask shape="rounded" willChangeTransform={false} width="100%" height="40vh">
                                    <Box display="flex" alignItems="center" justifyContent="center" color="lightGray" height="100%">
                                        <Icon icon="add" size={40} accessibilityLabel="add"/>
                                    </Box>
                                </Mask>
                                </Touchable>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default Home;