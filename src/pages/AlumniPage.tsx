import { FC } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlumniCard from "../components/AlumniCard";
import images from "../assets/images";

interface AlumniData {
  link?: string;
  photo: string;
  name: string;
  position: string;
  year: string;
}

const ListNotableAlumni: AlumniData[] = [
  { name: "Vivek Oberoi", position: "Actor", photo: images.vivekoberoi, link: "https://www.instagram.com/vivekoberoi", year: "(1997)" },
  { name: "Shreyas Talpade", position: "Actor", photo: images.shreyastalpade, link: "https://www.instagram.com/shreyastalpade27", year: "(1995)" },
  { name: "Siddhanth Chaturvedi", position: "Actor", photo: images.siddhantchaturvedi, link: "https://www.instagram.com/siddhantchaturvedi", year: "(2012)" },
  { name: "Abhinay Berde", position: "Actor", photo: images.abhinayberde, link: "https://www.instagram.com/abhinay3", year: "(2018)" },
  { name: "Sukriti Kakar", position: "Singer", photo: images.sukritikakar, link: "https://www.instagram.com/sukritikakar", year: "(2013)" },
  { name: "Prakriti Kakar", position: "Singer", photo: images.prakritikakar, link: "https://www.instagram.com/prakritikakar", year: "(2013)" },
  { name: "Bhavya Gandhi", position: "Actor", photo: images.bhavyagandhi, link: "https://www.instagram.com/bhavyagandhi97", year: "(2018)" },
  { name: "Maanuni Desai", position: "Singer", photo: images.maanunidesai, link: "https://www.instagram.com/scarlettvictim", year: "(2017)" },
  { name: "Shreya Bugde", position: "Actress", photo: images.shreyabugde, link: "https://www.instagram.com/shreyabugde", year: "(2007)" },
  { name: "Parvathy Omanakuttan", position: "Dancer", photo: images.parvathyomanakuttan, link: "https://www.instagram.com/parvathyo13", year: "(2008)" },
  { name: "Shivani Singh", position: "Miss Diva Universe 2014", photo: images.shivanisingh, link: "https://www.instagram.com/shivani.singhh/", year: "(2017)" },
  { name: "Amatya Goradia", position: "Actor", photo: images.amatyagoradia, link: "https://www.instagram.com/amatyawrites", year: "(2011)" },
  { name: "Rhea Borah", position: "Model", photo: images.rheaborah, link: "https://www.instagram.com/rheab73_", year: "(2021)" },
  { name: "Aasa Singh", position: "Musician", photo: images.aasasingh, link: "https://www.instagram.com/aasa.sing", year: "" },
  { name: "Moniraj Hazarika", position: "Musician", photo: images.monirajhazarika, link: "https://www.instagram.com/monirajhazarika", year: "(2016)" },
];

const ListOverall: AlumniData[] = [
  { name: "Krishna Birla", position: "Cultural Secretary", photo: images.krishnabirla, link: "https://www.linkedin.com/in/krishnabirla26", year: "(2023)" },
  { name: "Shivam Jhawar", position: "Deptuty Cultural Secretary", photo: images.shivamjhawar, link: "https://www.linkedin.com/in/shivamjhawar", year: "(2023)" },
  { name: "Mohak Matkar", position: "Actress and Singer", photo: images.mohakmatkar, link: "https://www.instagram.com/mohak_matkar", year: "(2023)" },
  { name: "Anushka Gite", position: "Actress", photo: images.anushkagite, link: "https://www.instagram.com/anushkagite13", year: "(2023)" },
  { name: "Arya Potdar", position: "Trader and Investor", photo: images.aryapotdar, link: "https://www.instagram.com/arya.potdar", year: "(2023)" },
  { name: "Shlok Bafna", position: "Dancer", photo: images.shlokbafna, link: "https://www.instagram.com/ft.shlok", year: "(2023)" },
  { name: "Ojasvee Singhal", position: "Cultural Secretary", photo: images.ojasveesinghal, link: "https://www.instagram.com/ojasvee03", year: "(2022)" },
  { name: "Praneet Parvataneni", position: "", photo: images.praneetparvataneni, link: "https://www.instagram.com/praneet_par1012", year: "(2022)" },
  { name: "Tanishq Jain", position: "", photo: images.tanishqjain, link: "https://www.instagram.com/tanishq_jain10", year: "(2022)" },
  { name: "Riddhish Hathi", position: "Musician", photo: images.riddhishhathi, link: "https://www.instagram.com/riddhish_music", year: "(2022)" },
  { name: "Krishna Solanki", position: "Musician", photo: images.krishnasolanki, link: "https://www.instagram.com/kris_solanki", year: "(2022)" },
  { name: "Savni Bhatt", position: "Musician", photo: images.savnibhatt, link: "https://www.instagram.com/savnibhatt", year: "(2022)" },
  { name: "Fiza Varia", position: "Actor", photo: images.fizavaria, link: "https://www.instagram.com/fiza_varia", year: "(2022)" },
  { name: "Nischal Sharma", position: "Emcee", photo: images.nischalsharma, link: "https://www.instagram.com/nischal_sharmaaa", year: "(2022)" },
  { name: "Samika Mittal", position: "Ms. University Runner Up", photo: images.samikamittal, link: "https://www.instagram.com/samikamital", year: "(2022)" },
  { name: "Aishwarya Rathod", position: "Influencer", photo: images.aishwaryarathod, link: "https://www.instagram.com/aishwaryarathod_", year: "(2022)" },
  { name: "Kunal Verma", position: "Musician", photo: images.kunalverma, link: "https://www.instagram.com/kunalverma__", year: "(2022)" },
  { name: "Yogeshwar Singh", position: "Speaker", photo: images.yogeshwarsingh, link: "https://www.instagram.com/yogeshwar._", year: "(2022)" },
  { name: "Parth Shah", position: "Cultural Secretary", photo: images.parthshah2021, link: "https://www.instagram.com/pxrthshxh/", year: "(2021)" },
  { name: "Kunal Naker", position: "Joint Cultural Secretary", photo: images.kunalnaker, link: "https://www.instagram.com/meinkunalhai", year: "(2021)" },
  { name: "Swar Sharma", position: "Musician", photo: images.swarsharma, link: "https://www.instagram.com/swarrattansharma", year: "(2021)" },
  { name: "Shivam Trivedi", position: "Musician", photo: images.shivamtrivedi, link: "https://www.instagram.com/shivamtrivedii", year: "(2021)" },
  { name: "Arshaan Hafiz", position: "Model", photo: images.arshaanhafiz, link: "https://www.instagram.com/arshaannnhafiz", year: "(2021)" },
  { name: "Aditya Birawat", position: "Cultural Secretary", photo: images.adityabirawat, link: "https://www.instagram.com/adityabirawat", year: "(2020)" },
  { name: "Parth Shah", position: "Cultural Secretary", photo: images.parthshah2019, link: "https://www.instagram.com/__parthshah_", year: "(2019)" },
  { name: "Mahima Seth", position: "Cultural Secretary", photo: images.mahimaseth, link: "https://www.instagram.com/mahimaseth_", year: "(2018)" },
  { name: "Sagar Rana", position: "Cultural Secretary", photo: images.sagarrana, link: "https://www.instagram.com/sagarranaofficial", year: "(2017)" },
  { name: "Lijo Varghese", position: "Joint Cultural Secretary", photo: images.lijovarghese, link: "https://www.instagram.com/lijo.jojo", year: "(2017)" },
  { name: "Pranita Kanhai", position: "Cultural Secretary", photo: images.pranitakanhai, link: "https://www.instagram.com/pranitakanhai", year: "(2016)" },
  { name: "Akshar Oza", position: "Musician", photo: images.aksharoza, link: "https://www.instagram.com/aksharoza", year: "(2016)" },
  { name: "Chandralekha Mukherjee", position: "Actress", photo: images.chandralekhamukherjee, link: "https://www.instagram.com/chandralekhamukherjee", year: "(2016)" },
  { name: "Karan Thakur", position: "Cultural Secretary", photo: images.blank, year: "(2015)" },
  { name: "Prince George", position: "Musician", photo: images.princegeorge, link: "https://www.instagram.com/princegeorgemusic14", year: "(2015)" },
  { name: "Anurag Jajodia", position: "Cultural Secretary", photo: images.anuragjajodia, link: "https://www.instagram.com/iamanuragjajodia", year: "(2014)" },
  { name: "Pranav Bhatt", position: "Cultural Secretary", photo: images.pranavbhatt, year: "(2013)" },
  { name: "Antara Kawale", position: "Actor turned Teacher", photo: images.antarakawale, link: "https://www.instagram.com/antara_k12", year: "(2013)" },
  { name: "Anurag Shastri", position: "Cultural Secretary", photo: images.anuragshastri, link: "https://www.instagram.com/anuragshastri", year: "(2012)" },
  { name: "Mayur Rao", position: "Cultural Secretary", photo: images.mayurrao, link: "https://www.instagram.com/mayurraomusic", year: "(2011)" },
  { name: "Siddhikesh Ghosalkar", position: "Cultural Secretary", photo: images.siddhikeshghosalkar, link: "https://www.instagram.com/siddhikeshghosalkar", year: "(2010)" },
  { name: "Wrisha Dutta", position: "Cultural Secretary", photo: images.wrishadutta, link: "https://www.instagram.com/wrisha", year: "(2009)" },
  { name: "Hardik Sangani", position: "Actor", photo: images.hardiksangani, link: "https://www.instagram.com/hardiksangani", year: "(2008)" },
  { name: "Swapnil Ajgaonkar", position: "Actor", photo: images.swapnilajgaonkar, link: "https://www.instagram.com/swapniilsa", year: "(2006)" },
  { name: "Yogesh Pagare", position: "Actor", photo: images.yogeshpagare, link: "https://www.instagram.com/yogeshvpagaare", year: "(1999)" },
  { name: "Anuj Danait", position: "Musician", photo: images.anujdanait, link: "https://www.instagram.com/anujdanait", year: "" },
  { name: "Kevin Manjrekar", position: "Musician", photo: images.kevinmanjrekar, link: "https://www.instagram.com/Iammanjee", year: "" },
  { name: "Sanjeevani", position: "Musician", photo: images.sanjeevani, link: "https://www.instagram.com/ninnion12", year: "" },
  { name: "Samarth Swarup", position: "Musician", photo: images.samarthswarup, link: "https://www.instagram.com/samarthswarup", year: "" },
  { name: "Anuradha Pal", position: "Musician", photo: images.anuradhapal, link: "https://www.instagram.com/anuradhapaltabla", year: "" },
];

const AlumniPage: FC = () => {
  return (
    <div className="w-full bg-[url('../../assets/images/i.png')] bg-cover bg-no-repeat">
      <Navbar />
      
      <main className="w-full">
        <h1 className="font-marcellus text-[70px] text-center pt-5 w-[90%] mx-auto my-5 text-white 
          md:text-[60px] sm:text-[45px] xs:text-[40px]">
          Our Alumni
        </h1>

        <section className="rounded-[30px] text-center p-[10px] font-manrope-semibold 
          text-2xl w-[70%] mx-auto text-white bg-black border border-white/90 mb-[30px]
          lg:w-[90%] md:mb-5 sm:text-xl">
          <h2 className="text-2xl text-center w-fit mx-auto">Notable Alumni</h2>
          <div className="flex justify-evenly flex-wrap">
            <AlumniCard items={ListNotableAlumni} />
          </div>
        </section>

        <section className="rounded-[30px] text-center p-[10px] font-manrope-semibold 
          text-2xl w-[70%] mx-auto text-white bg-black border border-white/90 mb-[30px]
          lg:w-[90%] md:mb-5 sm:text-xl">
          <h2 className="text-2xl text-center w-fit mx-auto">Alumni</h2>
          <div className="flex justify-evenly flex-wrap">
            <AlumniCard items={ListOverall} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlumniPage; 