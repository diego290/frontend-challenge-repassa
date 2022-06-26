import React from "react";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import ArtTrack from "@material-ui/icons/ArtTrack";
import { TextField } from '@material-ui/core';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import Button from "../../components/CustomButtons/Button.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Loading from '../../components/Loading/Loading';

import Admin from "../../layouts/Admin.js";

import styles from "../../assets/jss/nextjs-material-dashboard-pro/views/charactersPageStyle";

import { Characters } from '../api/character/getCharacterResponse';

import API from "../../services/api.js";

function CharactersPage() {
  /*@ts-ignore*/
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Characters[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setLoaded(false);

    let charactersReturn = API.get(`/character`
    ).then((response) => {
      let charactersResponse = response.data.results;
      let charactersData: Characters[] = Object.assign({}, data);

      charactersData =
        charactersResponse.map((prop, key) => {
          return {
            id: key = prop[0] = prop.id,
            name: prop[1] = prop.name,
            species: prop[2] = prop.species,
            image: prop[3] = prop.image,
          }
        });

      setData(charactersData);

      setLoaded(true);

      return charactersReturn;
    }
    ).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      setLoaded(true);
      return null;
    });
  }, []);

  const newData = React.useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return (
      data.filter((dataFilter) =>
        dataFilter.name.toLowerCase().includes(lowerSearch)
      )
    )
  }, [search, data]);

  return (
    <div className={classes.container}>
      <Loading promiseInProgress={!loaded} />
      <GridContainer justify="center" className={classes.backgroundGrid}>
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>PERSONAGENS DE RICK AND MORTY</h1>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            onChange={(event) => setSearch(event.target.value)}
            label="Pesquisar..."
            name="search"
            value={search}
          />
        </GridItem>
        <div className={classes.spaces}></div>
        {newData.map(character => (
          <GridItem key={character.id} xs={12} sm={12} md={4}>
            <Card Character className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <Link href={"personagem/" + character.id}>
                  <a>
                    <img src={character.image} />
                  </a>
                </Link>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Link href={"personagem/" + character.id}>
                    <a className={classes.iconHover}>
                      {/*@ts-ignore*/}
                      <Tooltip
                        id="tooltip-top"
                        title="Visualizar"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        {/*@ts-ignore*/}
                        <Button color="transparent" simple justIcon>
                          <ArtTrack style={{
                            width: "35px",
                            height: "35px",
                          }} />
                        </Button>
                      </Tooltip>
                    </a>
                  </Link>
                </div>
                <h4 className={classes.cardCharacterTitle}>
                  <Link href={"personagem/" + character.id}>
                    <a>
                      {character.name}
                    </a>
                  </Link>
                </h4>
                <p className={classes.cardCharacterDescription}>

                </p>
              </CardBody>
              <CardFooter Character>
                <div className={`${classes.stats} ${classes.CharacterStats}`}>
                  # {character.id}
                </div>
                <div className={`${classes.stats} ${classes.CharacterStats}`}>
                  {character.species}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        ))
        }
      </GridContainer>
    </div>
  )
}

CharactersPage.layout = Admin;

export default CharactersPage;