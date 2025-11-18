import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Analytics = () => {
  const topPosts = [
    { title: "10 трендов в маркетинге", views: 12400, likes: 850, shares: 320 },
    { title: "Секреты успешного контента", views: 9800, likes: 620, shares: 210 },
    { title: "Как увеличить вовлеченность", views: 7500, likes: 450, shares: 150 },
  ];

  const platformStats = [
    { name: "Telegram", views: 45000, engagement: "8.5%", growth: "+12%" },
    { name: "Яндекс.Дзен", views: 28000, engagement: "6.2%", growth: "+8%" },
    { name: "Дипспик", views: 12000, engagement: "5.1%", growth: "+15%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Аналитика</h1>
          <p className="text-muted-foreground mt-1">Отслеживайте эффективность вашего контента</p>
        </div>
        <Select defaultValue="week">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Эта неделя</SelectItem>
            <SelectItem value="month">Этот месяц</SelectItem>
            <SelectItem value="year">Этот год</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего просмотров</CardTitle>
            <Icon name="Eye" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85,234</div>
            <p className="text-xs text-green-500 mt-1">+12.5% от прошлой недели</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Вовлеченность</CardTitle>
            <Icon name="TrendingUp" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.3%</div>
            <p className="text-xs text-green-500 mt-1">+1.2% от прошлой недели</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Новых подписчиков</CardTitle>
            <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,243</div>
            <p className="text-xs text-green-500 mt-1">+8.2% от прошлой недели</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Просмотры по дням</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-end justify-between gap-2">
            {[12, 19, 15, 23, 18, 28, 22].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary rounded-t" style={{ height: `${(value / 30) * 100}%` }} />
                <span className="text-xs text-muted-foreground">
                  {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"][i]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Топ публикаций</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm mb-2">{post.title}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" className="h-3 w-3" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Heart" className="h-3 w-3" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Share2" className="h-3 w-3" />
                        {post.shares}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Статистика по платформам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {platformStats.map((platform, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{platform.name}</span>
                    <span className="text-sm text-green-500">{platform.growth}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Просмотры</p>
                      <p className="font-semibold">{platform.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Вовлеченность</p>
                      <p className="font-semibold">{platform.engagement}</p>
                    </div>
                  </div>
                  {i < platformStats.length - 1 && <div className="border-t mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="audience" className="space-y-4">
        <TabsList>
          <TabsTrigger value="audience">Аудитория</TabsTrigger>
          <TabsTrigger value="engagement">Вовлеченность</TabsTrigger>
          <TabsTrigger value="growth">Рост</TabsTrigger>
        </TabsList>

        <TabsContent value="audience">
          <Card>
            <CardHeader>
              <CardTitle>Демография аудитории</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">18-24 года</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "35%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">25-34 года</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "42%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">35-44 года</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "18%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">45+ лет</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Детальная статистика вовлеченности
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Динамика роста аудитории
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
