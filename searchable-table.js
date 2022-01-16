// https://github.com/rootVIII/searchable_bootstrap_table

// noinspection JSValidateTypes
class SearchableTable {
    constructor(tableData) {
        this.tableData = tableData;
        this.tableBody = document.getElementById('tableBody');
        this.searchBox = document.getElementById('searchBox');
        document.addEventListener('keyup', this.updateTable.bind(this), false);
    }

    loadTableData() {
        return new Promise((resolve) => {
            let tableRows = '';
            for (let row of this.tableData) {
                let [episode, season, title, airDate, loneGunmen] = row;
                tableRows += `<tr><th scope="row">${episode}</th><td>${season}</td>
                    <td>${title}</td><td>${airDate}</td><td>${loneGunmen}</td></tr>`;
            }
            resolve(tableRows);
        });
    }

    updateTable() {
        if (this.searchBox) {
            console.log('have searchbox');
        }
    }

    init_table() {
        this.loadTableData().then((tableRows) => {
            this.tableBody.innerHTML = tableRows;
        }).catch((err) => {
            console.log(err);
        });
    }
}

function getTableData() {
    // simulate fetching table data from the back-end:
    return [
        ['1', 's1', 'Pilot', 'September 10, 1993', 'no'],
        ['2', 's1', 'Deep Throat', 'September 17, 1993', 'no'],
        ['3', 's1', 'Squeeze', 'September 24, 1993', 'no'],
        ['4', 's1', 'Conduit', 'October 1, 1993', 'no'],
        ['5', 's1', 'The Jersey Devil', 'October 8, 1993', 'no'],
        ['6', 's1', 'Shadows', 'October 22, 1993', 'no'],
        ['7', 's1', 'Ghost in the Machine', 'October 29, 1993', 'no'],
        ['8', 's1', 'Ice', 'November 5, 1993', 'no'],
        ['9', 's1', 'Space', 'November 12, 1993', 'no'],
        ['10', 's1', 'Fallen Angel', 'November 19, 1993', 'no'],
        ['11', 's1', 'Eve', 'December 10, 1993', 'no'],
        ['12', 's1', 'Fire', 'December 17, 1993', 'no'],
        ['13', 's1', 'Beyond the Sea', 'January 7, 1994', 'no'],
        ['14', 's1', 'Gender Bender', 'January 21, 1994', 'no'],
        ['15', 's1', 'Lazarus', 'February 4, 1994', 'no'],
        ['16', 's1', 'Young at Heart', 'February 11, 1994', 'no'],
        ['17', 's1', 'E.B.E.', 'February 18, 1994', 'yes'],
        ['18', 's1', 'Miracle Man', 'March 18, 1994', 'no'],
        ['19', 's1', 'Shapes', 'April 1, 1994', 'no'],
        ['20', 's1', 'Darkness Falls', 'April 15, 1994', 'no'],
        ['21', 's1', 'Tooms', 'April 22, 1994', 'no'],
        ['22', 's1', 'Born Again', 'April 29, 1994', 'no'],
        ['23', 's1', 'Roland', 'May 6, 1994', 'no'],
        ['24', 's1', 'The Erlenmeyer Flask', 'May 13, 1994', 'no'],
        ['25', 's2', 'Little Green Men', 'September 16, 1994', 'no'],
        ['26', 's2', 'The Host', 'September 23, 1994', 'no'],
        ['27', 's2', 'Blood', 'September 30, 1994', 'yes'],
        ['28', 's2', 'Sleepless', 'October 7, 1994', 'no'],
        ['29', 's2', 'Duane Barry', 'October 14, 1994', 'no'],
        ['30', 's2', 'Ascension', 'October 21, 1994', 'no'],
        ['31', 's2', '\"3\"', 'November 4, 1994', 'no'],
        ['32', 's2', 'One Breath', 'November 11, 1994', 'yes'],
        ['33', 's2', 'Firewalker', 'November 18, 1994', 'no'],
        ['34', 's2', 'Red Museum', 'December 9, 1994', 'no'],
        ['35', 's2', 'Excelsis Dei', 'December 16, 1994', 'no'],
        ['36', 's2', 'Aubrey', 'January 6, 1995', 'no'],
        ['37', 's2', 'Irresistible', 'January 13, 1995', 'no'],
        ['38', 's2', 'Die Hand Die Verletzt', 'January 27, 1995', 'no'],
        ['39', 's2', 'Fresh Bones', 'February 3, 1995', 'no'],
        ['40', 's2', 'Colony', 'February 10, 1995', 'no'],
        ['41', 's2', 'End Game', 'February 17, 1995', 'no'],
        ['42', 's2', 'Fearful Symmetry', 'February 24, 1995', 'yes'],
        ['43', 's2', 'Død Kalm', 'March 10, 1995', 'no'],
        ['44', 's2', 'Humbug', 'March 31, 1995', 'no'],
        ['45', 's2', 'The Calusari', 'April 14, 1995', 'no'],
        ['46', 's2', 'F. Emasculata', 'April 28, 1995', 'no'],
        ['47', 's2', 'Soft Light', 'May 5, 1995', 'no'],
        ['48', 's2', 'Our Town', 'May 12, 1995', 'no'],
        ['49', 's2', 'Anasazi', 'May 19, 1995', 'yes'],
        ['50', 's3', 'The Blessing Way', 'September 22, 1995', 'no'],
        ['51', 's3', 'Paper Clip', 'September 29, 1995', 'yes'],
        ['52', 's3', 'D.P.O.', 'October 6, 1995', 'no'],
        ['53', 's3', 'Clyde Bruckman\'s Final Repose', 'October 13, 1995', 'no'],
        ['54', 's3', 'The List', 'October 20, 1995', 'no'],
        ['55', 's3', '2Shy', 'November 3, 1995', 'no'],
        ['56', 's3', 'The Walk', 'November 10, 1995', 'no'],
        ['57', 's3', 'Oubliette', 'November 17, 1995', 'no'],
        ['58', 's3', 'Nisei', 'November 24, 1995', 'yes'],
        ['59', 's3', '731', 'December 1, 1995', 'no'],
        ['60', 's3', 'Revelations', 'December 15, 1995', 'no'],
        ['61', 's3', 'War of the Coprophages', 'January 5, 1996', 'no'],
        ['62', 's3', 'Syzygy', 'January 26, 1996', 'no'],
        ['63', 's3', 'Grotesque', 'February 2, 1996', 'no'],
        ['64', 's3', 'Piper Maru', 'February 9, 1996', 'no'],
        ['65', 's3', 'Apocrypha', 'February 16, 1996', 'yes'],
        ['66', 's3', 'Pusher', 'February 23, 1996', 'no'],
        ['67', 's3', 'Teso Dos Bichos', 'March 8, 1996', 'no'],
        ['68', 's3', 'Hell Money', 'March 29, 1996', 'no'],
        ['69', 's3', 'Jose Chung\'s From Outer Space', 'April 12, 1996', 'no'],
        ['70', 's3', 'Avatar', 'April 26, 1996', 'no'],
        ['71', 's3', 'Quagmire', 'May 3, 1996', 'no'],
        ['72', 's3', 'Wetwired', 'May 10, 1996', 'yes'],
        ['73', 's3', 'Talitha Cumi', 'May 17, 1996', 'no'],
        ['74', 's4', 'Herrenvolk', 'October 4, 1996', 'no'],
        ['75', 's4', 'Home', 'October 11, 1996', 'no'],
        ['76', 's4', 'Teliko', 'October 18, 1996', 'no'],
        ['77', 's4', 'Unruhe', 'October 27, 1996', 'no'],
        ['78', 's4', 'The Field Where I Died', 'November 3, 1996', 'no'],
        ['79', 's4', 'Sanguinarium', 'November 10, 1996', 'no'],
        ['80', 's4', 'Musings of a Cigarette Smoking Man', 'November 17, 1996', 'yes'],
        ['81', 's4', 'Tunguska', 'November 24, 1996', 'no'],
        ['82', 's4', 'Terma', 'December 1, 1996', 'no'],
        ['83', 's4', 'Paper Hearts', 'December 15, 1996', 'no'],
        ['84', 's4', 'El Mundo Gira', 'January 12, 1997', 'no'],
        ['85', 's4', 'Leonard Betts', 'January 26, 1997', 'no'],
        ['86', 's4', 'Never Again', 'February 2, 1997', 'no'],
        ['87', 's4', 'Memento Mori', 'February 9, 1997', 'yes'],
        ['88', 's4', 'Kaddish', 'February 16, 1997', 'no'],
        ['89', 's4', 'Unrequited', 'February 23, 1997', 'no'],
        ['90', 's4', 'Tempus Fugit', 'March 16, 1997', 'no'],
        ['91', 's4', 'Max', 'March 23, 1997', 'no'],
        ['92', 's4', 'Synchrony', 'April 13, 1997', 'no'],
        ['93', 's4', 'Small Potatoes', 'April 20, 1997', 'yes'],
        ['94', 's4', 'Zero Sum', 'April 27, 1997', 'no'],
        ['95', 's4', 'Elegy', 'May 4, 1997', 'no'],
        ['96', 's4', 'Demons', 'May 11, 1997', 'no'],
        ['97', 's4', 'Gethsemane', 'May 18, 1997', 'no'],
        ['98', 's5', 'Redux', 'November 2, 1997', 'no'],
        ['99', 's5', 'Redux II', 'November 9, 1997', 'no'],
        ['100', 's5', 'Unusual Suspects', 'November 16, 1997', 'yes'],
        ['101', 's5', 'Detour', 'November 23, 1997', 'no'],
        ['102', 's5', 'The Post-Modern Prometheus', 'November 30, 1997', 'no'],
        ['103', 's5', 'Christmas Carol', 'December 7, 1997', 'no'],
        ['104', 's5', 'Emily', 'December 14, 1997', 'yes'],
        ['105', 's5', 'Kitsunegari', 'January 4, 1998', 'no'],
        ['106', 's5', 'Schizogeny', 'January 11, 1998', 'no'],
        ['107', 's5', 'Chinga', 'February 8, 1998', 'no'],
        ['108', 's5', 'Kill Switch', 'February 15, 1998', 'yes'],
        ['109', 's5', 'Bad Blood', 'February 22, 1998', 'no'],
        ['110', 's5', 'Patient X', 'March 1, 1998', 'no'],
        ['111', 's5', 'The Red and the Black', 'March 8, 1998', 'no'],
        ['112', 's5', 'Travelers', 'March 29, 1998', 'no'],
        ['113', 's5', 'Mind\'s Eye', 'April 19, 1998', 'no'],
        ['114', 's5', 'All Souls', 'April 26, 1998', 'no'],
        ['115', 's5', 'The Pine Bluff Variant', 'May 3, 1998', 'no'],
        ['116', 's5', 'Folie à Deux', 'May 10, 1998', 'no'],
        ['117', 's5', 'The End', 'May 17, 1998', 'yes'],
        ['118', 's6', 'The Beginning', 'November 8, 1998', 'no'],
        ['119', 's6', 'Drive', 'November 15, 1998', 'no'],
        ['120', 's6', 'Triangle', 'November 22, 1998', 'yes'],
        ['121', 's6', 'Dreamland', 'November 29, 1998', 'no'],
        ['122', 's6', 'Dreamland II', 'December 6, 1998', 'yes'],
        ['123', 's6', 'How the Ghosts Stole Christmas', 'December 13, 1998', 'no'],
        ['124', 's6', 'Terms of Endearment', 'January 3, 1999', 'no'],
        ['125', 's6', 'The Rain King', 'January 10, 1999', 'no'],
        ['126', 's6', 'S.R. 819', 'January 17, 1999', 'no'],
        ['127', 's6', 'Tithonus', 'January 24, 1999', 'no'],
        ['128', 's6', 'Two Fathers', 'February 7, 1999', 'no'],
        ['129', 's6', 'One Son', 'February 14, 1999', 'yes'],
        ['130', 's6', 'Agua Mala', 'February 21, 1999', 'no'],
        ['131', 's6', 'Monday', 'February 28, 1999', 'no'],
        ['132', 's6', 'Arcadia', 'March 7, 1999', 'no'],
        ['133', 's6', 'Alpha', 'March 28, 1999', 'no'],
        ['134', 's6', 'Trevor', 'April 11, 1999', 'no'],
        ['135', 's6', 'Milagro', 'April 18, 1999', 'no'],
        ['136', 's6', 'The Unnatural', 'April 25, 1999', 'no'],
        ['137', 's6', 'Three of a Kind', 'May 2, 1999', 'yes'],
        ['138', 's6', 'Field Trip', 'May 9, 1999', 'yes'],
        ['139', 's6', 'Biogenesis', 'May 16, 1999', 'no'],
        ['140', 's7', 'The Sixth Extinction', 'November 7, 1999', 'no'],
        ['141', 's7', 'The Sixth Extinction II: Amor Fati', 'November 14, 1999', 'no'],
        ['142', 's7', 'Hungry', 'November 21, 1999', 'no'],
        ['143', 's7', 'Millennium', 'November 28, 1999', 'no'],
        ['144', 's7', 'Rush', 'December 5, 1999', 'no'],
        ['145', 's7', 'The Goldberg Variation', 'December 12, 1999', 'no'],
        ['146', 's7', 'Orison', 'January 9, 2000', 'no'],
        ['147', 's7', 'The Amazing Maleeni', 'January 16, 2000', 'no'],
        ['148', 's7', 'Signs and Wonders', 'January 23, 2000', 'no'],
        ['149', 's7', 'Sein und Zeit', 'February 6, 2000', 'no'],
        ['150', 's7', 'Closure', 'February 13, 2000', 'no'],
        ['151', 's7', 'X-Cops', 'February 20, 2000', 'no'],
        ['152', 's7', 'First Person Shooter', 'February 27, 2000', 'yes'],
        ['153', 's7', 'Theef', 'March 12, 2000', 'no'],
        ['154', 's7', 'En Ami', 'March 19, 2000', 'yes'],
        ['155', 's7', 'Chimera', 'April 2, 2000', 'no'],
        ['156', 's7', 'all things', 'April 9, 2000', 'no'],
        ['157', 's7', 'Brand X', 'April 16, 2000', 'no'],
        ['158', 's7', 'Hollywood A.D.', 'April 30, 2000', 'no'],
        ['159', 's7', 'Fight Club', 'May 7, 2000', 'no'],
        ['160', 's7', 'Je Souhaite', 'May 14, 2000', 'no'],
        ['161', 's7', 'Requiem', 'May 21, 2000', 'yes'],
        ['162', 's8', 'Within', 'November 5, 2000', 'yes'],
        ['163', 's8', 'Without', 'November 12, 2000', 'no'],
        ['164', 's8', 'Patience', 'November 19, 2000', 'no'],
        ['165', 's8', 'Roadrunners', 'November 26, 2000', 'no'],
        ['166', 's8', 'Invocation', 'December 3, 2000', 'no'],
        ['167', 's8', 'Redrum', 'December 10, 2000', 'no'],
        ['168', 's8', 'Via Negativa', 'December 17, 2000', 'yes'],
        ['169', 's8', 'Surekill', 'January 7, 2001', 'no'],
        ['170', 's8', 'Salvage', 'January 14, 2001', 'no'],
        ['171', 's8', 'Badlaa', 'January 21, 2001', 'no'],
        ['172', 's8', 'The Gift', 'February 4, 2001', 'yes'],
        ['173', 's8', 'Medusa', 'February 11, 2001', 'no'],
        ['174', 's8', 'Per Manum', 'February 18, 2001', 'no'],
        ['175', 's8', 'This Is Not Happening', 'February 25, 2001', 'no'],
        ['176', 's8', 'Deadalive', 'April 1, 2001', 'yes'],
        ['177', 's8', 'Three Words', 'April 8, 2001', 'yes'],
        ['178', 's8', 'Empedocles', 'April 22, 2001', 'no'],
        ['179', 's8', 'Vienen', 'April 29, 2001', 'no'],
        ['180', 's8', 'Alone', 'May 6, 2001', 'no'],
        ['181', 's8', 'Essence', 'May 13, 2001', 'no'],
        ['182', 's8', 'Existence', 'May 20, 2001', 'yes'],
        ['183', 's9', 'Nothing Important Happened Today', 'November 11, 2001', 'yes'],
        ['184', 's9', 'Nothing Important Happened Today II', 'November 18, 2001', 'yes'],
        ['185', 's9', 'Dæmonicus', 'December 2, 2001', 'no'],
        ['186', 's9', '4-D', 'December 9, 2001', 'no'],
        ['187', 's9', 'Lord of the Flies', 'December 16, 2001', 'no'],
        ['188', 's9', 'Trust No 1', 'January 6, 2002', 'no'],
        ['189', 's9', 'John Doe', 'January 13, 2002', 'no'],
        ['190', 's9', 'Hellbound', 'January 27, 2002', 'no'],
        ['191', 's9', 'Provenance', 'March 3, 2002', 'yes'],
        ['192', 's9', 'Providence', 'March 10, 2002', 'yes'],
        ['193', 's9', 'Audrey Pauley', 'March 17, 2002', 'no'],
        ['194', 's9', 'Underneath', 'March 31, 2002', 'no'],
        ['195', 's9', 'Improbable', 'April 7, 2002', 'no'],
        ['196', 's9', 'Scary Monsters', 'April 14, 2002', 'no'],
        ['197', 's9', 'Jump the Shark', 'April 21, 2002', 'yes'],
        ['198', 's9', 'William', 'April 28, 2002', 'no'],
        ['199', 's9', 'Release', 'May 5, 2002', 'no'],
        ['200', 's9', 'Sunshine Days', 'May 12, 2002', 'no'],
        ['201', 's9', 'The Truth 1', 'May 19, 2002', 'yes'],
        ['202', 's9', 'The Truth 2', 'May 19, 2002', 'yes'],
        ['203', 's10', 'My Struggle', 'January 24, 2016', 'no'],
        ['204', 's10', 'Founder\'s Mutation', 'January 25, 2016', 'no'],
        ['205', 's10', 'Mulder and Scully Meet the Were-Monster', 'February 1, 2016', 'no'],
        ['206', 's10', 'Home Again', 'February 8, 2016', 'no'],
        ['207', 's10', 'Babylon', 'February 15, 2016', 'yes'],
        ['208', 's10', 'My Struggle II', 'February 22, 2016', 'no'],
        ['209', 's11', 'My Struggle III', 'January 3, 2018', 'no'],
        ['210', 's11', 'This', 'January 10, 2018', 'no'],
        ['211', 's11', 'Plus One', 'January 17, 2018', 'no'],
        ['212', 's11', 'The Lost Art of Forehead Sweat', 'January 24, 2018', 'no'],
        ['213', 's11', 'Ghouli', 'January 31, 2018', 'no'],
        ['214', 's11', 'Kitten', 'February 7, 2018', 'no'],
        ['215', 's11', 'Rm9sbG93ZXJz', 'February 28, 2018', 'no'],
        ['216', 's11', 'Familiar', 'March 7, 2018', 'no'],
        ['217', 's11', 'Nothing Lasts Forever', 'March 14, 2018', 'no'],
        ['218', 's11', 'My Struggle IV', 'March 21, 2018', 'no'],
    ];
}

function main() {
    let searchableTable;

    document.addEventListener('DOMContentLoaded', () => {
        searchableTable = new SearchableTable(getTableData());
        searchableTable.init_table();
    });
}

main();
