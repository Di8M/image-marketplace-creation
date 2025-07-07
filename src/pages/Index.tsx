import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Логотипы", icon: "Zap", count: 1250 },
    { name: "Фотографии", icon: "Camera", count: 3420 },
    { name: "Иллюстрации", icon: "Palette", count: 2180 },
    { name: "Иконки", icon: "Grid3x3", count: 890 },
    { name: "Фоны", icon: "Image", count: 1560 },
    { name: "Текстуры", icon: "Layers", count: 720 },
  ];

  const popularImages = [
    {
      id: 1,
      title: "Минималистичный логотип",
      price: 1500,
      category: "Логотипы",
      downloads: 245,
    },
    {
      id: 2,
      title: "Корпоративный фирменный стиль",
      price: 2500,
      category: "Логотипы",
      downloads: 189,
    },
    {
      id: 3,
      title: "Современная иконка",
      price: 800,
      category: "Иконки",
      downloads: 156,
    },
    {
      id: 4,
      title: "Абстрактный фон",
      price: 1200,
      category: "Фоны",
      downloads: 198,
    },
    {
      id: 5,
      title: "Деловая иллюстрация",
      price: 1800,
      category: "Иллюстрации",
      downloads: 167,
    },
    {
      id: 6,
      title: "Технологичная текстура",
      price: 1000,
      category: "Текстуры",
      downloads: 134,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">
                  MarketDi
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Категории
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Загрузить
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Помощь
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="Upload" className="h-4 w-4 mr-2" />
                Загрузить
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Миллионы качественных изображений
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Найдите идеальные логотипы, фотографии и иллюстрации для вашего
            бизнеса. Покупайте отдельно или оформите подписку со скидкой до 50%.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <Input
                placeholder="Поиск изображений, логотипов, иконок..."
                className="pl-12 pr-4 py-4 text-lg"
              />
              <Button className="absolute right-2 top-2 bottom-2">Найти</Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "логотип",
              "фирменный стиль",
              "иконки",
              "фон",
              "баннер",
              "презентация",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={category.icon}
                    className="h-12 w-12 mx-auto mb-4 text-blue-600"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count.toLocaleString()} файлов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Популярные изображения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
                  {image.id <= 2 || image.id === 4 ? (
                    <img
                      src={
                        image.id === 1
                          ? "/img/70a89635-afb3-43fa-89b5-10a11e5a59b2.jpg"
                          : image.id === 2
                            ? "/img/419dcb62-2c9a-498d-aa1b-cd42bb0992d8.jpg"
                            : "/img/6351add3-cdd7-4b18-89fb-8254fdfbfd78.jpg"
                      }
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Image" className="h-16 w-16 text-blue-400" />
                    </div>
                  )}
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {image.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {image.title}
                    </h3>
                    <span className="text-lg font-bold text-blue-600">
                      {image.price}₽
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Download" className="h-4 w-4 mr-1" />
                      {image.downloads}
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Тарифные планы
          </h2>
          <Tabs defaultValue="subscription" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="subscription">Подписка</TabsTrigger>
              <TabsTrigger value="individual">Разовые покупки</TabsTrigger>
            </TabsList>
            <TabsContent value="subscription" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Базовый</CardTitle>
                    <CardDescription>Для малого бизнеса</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      990₽<span className="text-sm font-normal">/мес</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        10 скачиваний в месяц
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Стандартная лицензия
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Доступ к базовой коллекции
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать план</Button>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Популярный</Badge>
                    <CardTitle>Профессиональный</CardTitle>
                    <CardDescription>Для растущего бизнеса</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      2490₽<span className="text-sm font-normal">/мес</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        50 скачиваний в месяц
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Расширенная лицензия
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Доступ ко всей коллекции
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Приоритетная поддержка
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать план</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Корпоративный</CardTitle>
                    <CardDescription>Для крупного бизнеса</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      4990₽<span className="text-sm font-normal">/мес</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Неограниченные скачивания
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Коммерческая лицензия
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Эксклюзивный контент
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Персональный менеджер
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать план</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="individual" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Стандартная лицензия</CardTitle>
                    <CardDescription>Для большинства проектов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-4">
                      от 500₽ за изображение
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Использование в веб и печати
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        До 500,000 показов
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Коммерческое использование
                      </li>
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Выбрать изображения
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Расширенная лицензия</CardTitle>
                    <CardDescription>Для крупных проектов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-4">
                      от 2500₽ за изображение
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Неограниченные показы
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Перепродажа товаров
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 mr-2 text-green-500"
                        />
                        Использование в рекламе
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать изображения</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6" />
                <span className="text-lg font-bold">MarketDi</span>
              </div>
              <p className="text-gray-400">
                Лучшая платформа для покупки и продажи качественных изображений
                и логотипов.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Категории</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Логотипы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Фотографии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Иллюстрации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Иконки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Часто задаваемые вопросы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Лицензии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Техническая поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продавцам</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Загрузить контент
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Требования к файлам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Выплаты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StockMarket. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
